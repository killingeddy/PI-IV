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

const getAllLeituras = (limit, offset, status) => {
  var statusQuery = "";
  switch (status) {
    case "all":
      statusQuery = "";
      break;
    case "fire":
      statusQuery = "WHERE fire > 0 ";
      break;
    case "gas":
      statusQuery = "WHERE gas > 0";
      break;
    case "temperature":
      statusQuery = "WHERE temperature > 0";
      break;
    case "moisture":
      statusQuery = "WHERE moisture > 0";
      break;
    default:
      statusQuery = "";
      break;
  }

  return {
    text: `
          SELECT *
          FROM readings
          ${statusQuery}
          ORDER BY created_at DESC
          LIMIT $1
          OFFSET $2
      `,
    values: [limit, offset],
  };
};

const countLeituras = (status) => {
  var statusQuery = "";
  switch (status) {
    case "all":
      statusQuery = "";
      break;
    case "fire":
      statusQuery = "WHERE fire > 0";
      break;
    case "gas":
      statusQuery = "WHERE gas > 0";
      break;
    case "temperature":
      statusQuery = "WHERE temperature > 0";
      break;
    case "moisture":
      statusQuery = "WHERE moisture > 0";
      break;
    default:
      statusQuery = "";
      break;
  }

  return {
    text: `
          SELECT COUNT(*)
          FROM readings
          ${statusQuery}
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
};

module.exports = {
  createLeitura,
  getAllLeituras,
  updateLeitura,
  deleteLeitura,
  getLeituraById,
  countLeituras,
};
