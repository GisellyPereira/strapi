import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { getVeiculos } from "../services/utils/veiculosApi";
import { getImageFeatured } from "../services/utils/imageFeatured";

const Home = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [imageFeatured, setImageFeatured] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVeiculos();
        console.log('Dados obtidos da API de veículos:', response);
        if (response?.data) {
          setVeiculos(response.data);
        } else {
          setVeiculos([]);
        }
      } catch (error) {
        console.error('Erro ao obter dados da API de veículos:', error);
        setError('Erro ao carregar veículos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchImageFeatured = async () => {
      try {
        const response = await getImageFeatured();
        console.log('Resposta da API getImageFeatured:', response);
        if (response?.data?.attributes?.image?.data?.attributes?.url) {
          setImageFeatured(response.data.attributes.image.data.attributes);
        } else {
          setImageFeatured({});
        }
      } catch (error) {
        console.error('Erro ao obter imagem destacada:', error);
        setError('Erro ao carregar imagem');
      } finally {
        setLoading(false);
      }
    };

    fetchImageFeatured();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-4">
          {imageFeatured?.url ? (
            <img
              src={`http://localhost:1337${imageFeatured.url}`}
              alt="Carro de destaque"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <p>Imagem de destaque não encontrada.</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : Array.isArray(veiculos) && veiculos.length > 0 ? (
            veiculos.map((veiculo) => {
              const { id, attributes } = veiculo;
              const { title, description, imageCover } = attributes;
              const imageUrl = imageCover?.data?.attributes?.url;

              return (
                <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={`http://localhost:1337${imageUrl}`}
                      alt={title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">Sem imagem</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nenhum veículo encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
