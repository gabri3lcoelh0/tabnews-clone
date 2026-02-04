import retry from "async-retry";

async function waitForAllServices() {
  // Espera o web retornar uma resposta
  await waitForWebServer();

  async function waitForWebServer() {
    // Tenta no maximo 100 vezes fazer conexoes com no maximo de 1s de tempo para expirar
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    // Faz as conexões, se o status for diferente de 200 lança um erro
    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

// Exporta a função para outros serviços usarem
export default {
  waitForAllServices,
};
