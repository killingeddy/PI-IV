#include <WiFi.h>
#include <HTTPClient.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

const char* ssid = "NOMEWIFI";
const char* senha = "SENHAWIFI";

const char* baseUrl = "https://client-5g3g.onrender.com/";
const char* loginUrl = baseUrl + "auth/login";
const char* readingsUrl = baseUrl + "readings";

char urlTemperatura[100];
char urlUmidade[100];
float temperatura, umidade;

#define DHT22_PINO 23
#define DHT_TIPO DHT22

DHT dht(DHT22_PINO, DHT_TIPO);
HTTPClient http;

void setup() {
  Serial.begin(9600);
  delay(1000);

  dht.begin();

  // Conectar à rede Wi-Fi
  WiFi.begin(ssid, senha);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando ao WiFi...");
  }
  Serial.println("Conectado ao WiFi!");
  
}

String getToken() {
  String token;

  // Realizar login para obter o token
  StaticJsonDocument<200> loginDoc;
  loginDoc["email"] = "killingeddy@gmail.com";
  loginDoc["password"] = "dodoto2311";
  
  HTTPClient httpLogin;
  httpLogin.begin(loginUrl);
  httpLogin.addHeader("Content-Type", "application/json");

  int httpCodeLogin = httpLogin.POST(loginDoc.as<String>());

  if (httpCodeLogin > 0) {
    DynamicJsonDocument loginResponseDoc(1024);
    deserializeJson(loginResponseDoc, httpLogin.getString());
    token = loginResponseDoc["token"].as<String>();
  } else {
    Serial.println("Falha na solicitação HTTP para login");
  }

  httpLogin.end();

  return token;
}

void getTemperaturaUmidadeAtual() {
  umidade = dht.readHumidity();   
  temperatura = dht.readTemperature(); 
}

void createTemperatura(String token) {
  sprintf(urlTemperatura, "%s?temperatura=%.1f&umidade=%.1f", readingsUrl, temperatura, umidade);
  http.begin(urlTemperatura);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("auth-token", token);

  int httpCode = http.POST("");

  if (httpCode > 0) {
    String payload = http.getString();
    Serial.println(payload);
  } else {
    Serial.println("Falha na solicitação HTTP para criação de temperatura");
  }

  http.end();
}

void loop() {
  // Obter o token de autenticação
  String authToken = getToken();

  // Se o token foi obtido com sucesso
  if (authToken != "") {
    // Obter a temperatura e umidade atual
    getTemperaturaUmidadeAtual();

    // Enviar as leituras de temperatura e umidade
    createTemperatura(authToken);
  }

  delay(900000);  // Aguarda 5 segundos antes de fazer outra leitura
}
