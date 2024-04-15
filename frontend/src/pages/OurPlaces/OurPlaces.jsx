
import Card from './Cards';

function OurPlaces() {
  const cards = [
    {
      title: 'Card 1',
      description: 'Descripción de la tarjeta 1',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      description: 'Descripción de la tarjeta 2',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 3',
      description: 'Descripción de la tarjeta 3',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 4',
      description: 'Descripción de la tarjeta 4',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 5',
      description: 'Descripción de la tarjeta 5',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 6',
      description: 'Descripción de la tarjeta 6',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 7',
      description: 'Descripción de la tarjeta 7',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 8',
      description: 'Descripción de la tarjeta 8',
      imageSrc: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8">
        <h1 className='text-3xl font-semibold mb-8'>Nuestros destinos</h1>
      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default OurPlaces;
