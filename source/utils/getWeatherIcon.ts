export function getWeatherIcon(description: string, ehDia: boolean) {
  if (description.includes('céu limpo'))
    return ehDia
      ? require('../../assets/icons/CEU-LIMPO-DIA.png')
      : require('../../assets/icons/CEU-LIMPO-NOITE.png');

  if (description.includes('algumas nuvens'))
    return ehDia
      ? require('../../assets/icons/POUCAS-NUVENS-DIA.png')
      : require('../../assets/icons/POUCAS-NUVENS-NOITE.png');

  if (description.includes('nuvens dispersas'))
    return ehDia
      ? require('../../assets/icons/NUVENS-DISPERSAS-DIA.png')
      : require('../../assets/icons/NUVENS-DISPERSAS-NOITE.png');

  if (description.includes('nuvens quebradas'))
    return ehDia
      ? require('../../assets/icons/PARCIAL-NUBLADO-DIA.png')
      : require('../../assets/icons/PARCIAL-NUBLADO-NOITE.png');

  if (description.includes('nublado'))
    return require('../../assets/icons/NUBLADO.png');

  if (description.includes('chuva leve'))
    return ehDia
      ? require('../../assets/icons/CHUVA-DIA.png')
      : require('../../assets/icons/CHUVA-NOITE.png');

  if (description.includes('chuva'))
    return require('../../assets/icons/PANCADA-CHUVA.png');

  if (description.includes('trovoada'))
    return require('../../assets/icons/TEMPESTADE.png');

  if (description.includes('neve'))
    return require('../../assets/icons/NEVE.png');

  if (description.includes('nevoeiro'))
    return require('../../assets/icons/NEVOA.png');

  return require('../../assets/icons/UNKNOWN.png');
}
