import axios from 'axios';
import qs from 'qs';

export const getVeiculos = async () => {
  const query = qs.stringify({
    populate: {
      imageCover: {
        fields: ['url'],
      },
    },
  }, {
    encodeValuesOnly: true,
  });

  const response = await axios.get(`http://localhost:1337/api/veiculos?${query}`);
  return response.data;
};
