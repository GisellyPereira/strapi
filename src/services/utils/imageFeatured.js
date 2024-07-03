import axios from 'axios';
import qs from 'qs';

export const getImageFeatured = async () => {
  try {
    const query = qs.stringify({
      populate: {
        image: {
          fields: ['url'],
        },
      },
    }, {
      encodeValuesOnly: true,
    });

    const response = await axios.get(`http://localhost:1337/api/image-featured?${query}`);
    console.log('Resposta da API getImageFeatured:', response.data); // Verifique a resposta da API no console

    return response.data;
  } catch (error) {
    console.error('Erro ao obter imagem destacada:', error);
    throw error; // Lança o erro para que possa ser tratado onde a função getImageFeatured for chamada
  }
};
