const createLeitura = (temperatura, umidade) => {
  return {
    text: `
          INSERT INTO readings (temperature, moisture)
          VALUES ($1, $2)
          RETURNING *
      `,
    values: [temperatura, umidade],
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

const updateLeitura = (id, temperatura, umidade) => {
  return {
    text: `
        UPDATE readings
        SET temperature = $1, moisture = $2
        WHERE id = $3
        RETURNING *
    `,
    values: [temperatura, umidade, id],
  };
};

const deleteLeitura = (id) => {
  return {
    text: `
        DELETE FROM readings
        WHERE id = $1
        RETURNING *
    `,
    values: [id],
  };
};

module.exports = {
  createLeitura,
  getAllLeituras,
  updateLeitura,
  deleteLeitura,
};
