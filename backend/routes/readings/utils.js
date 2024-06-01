const createLeitura = (temperatura, umidade, fogo, gas) => {
  return {
    text: `
        INSERT INTO public.readings
        (created_at, temperature, moisture, fire, gas)
        VALUES(CURRENT_TIMESTAMP, $1, $2, $3, $4)
        RETURNING *
      `,
    values: [temperatura, umidade, fogo, gas],
  };
};

const getAllLeituras = () => {
  return {
    text: `
          SELECT *
          FROM readings
      `,
  };
};

const updateLeitura = (id, temperatura, umidade, fogo, gas) => {
  return {
    text: `
        UPDATE readings
        SET temperature = $1, moisture = $2, fire = $3, gas = $4
        WHERE id = $5
        RETURNING *
    `,
    values: [temperatura, umidade, fogo, gas, id],
  };
};

const deleteLeitura = (id) => {
  return {
    text: `
        DELETE FROM readings
        WHERE id = $1
    `,
    values: [id],
  };
};

const getLeituraById = (id) => {
  return {
    text: `
        SELECT *
        FROM readings
        WHERE id = $1
    `,
    values: [id],
  };
}

module.exports = {
  createLeitura,
  getAllLeituras,
  updateLeitura,
  deleteLeitura,
  getLeituraById
};
