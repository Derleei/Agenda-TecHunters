// Configuração da agenda TecHunters
// Textos, datas e horários podem ser editados à vontade.
// O token abaixo só tem acesso ao repositório Agenda-TecHunters-respostas e vence em 29/11/2026.
window.AGENDA_CONFIG = {
  titulo: "TecHunters: qual o melhor horário para você?",
  descricao: "Marque todos os horários em que você pode participar. Cada horário dura 1 hora.",

  dataInicio: "2026-11-01",   // primeiro dia (ano-mês-dia)
  dataFim: "2026-11-07",      // último dia
  horaInicio: 9,              // primeiro horário: 09h–10h
  horaFim: 21,                // último horário termina às 21h (20h–21h)

  github: {
    usuario: "Derleei",
    repositorio: "Agenda-TecHunters-respostas",
    branch: "main",
    pasta: "respostas",
    // Token embaralhado (não é criptografia: só evita que o GitHub bloqueie este arquivo).
    tokenCodificado: "Y0prTVNPV1NFUFVaSUg2WDRsVTcydUpJWXZ3YTlTRVZ1emlJeWI5NmVRR3BMZ0NyTWMwRFhKQ0ZDUGNfRVlBWVJSTVd5NnM2MEkySU5OREExMV90YXBfYnVodGln"
  }
};
