import { styled, Box } from '@mui/material';
import FeedbackCard from '../../serviceCard';
import {Customer_1,Customer_2,Customer_3} from '../../../assert/images';

const Container = styled(Box)({
  position: 'relative',
  background: '#f4f8fb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '80px 40px',

});

const MainContentContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const MainTitle = styled('p')<any>(({ fontSize, color }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color,
  fontSize,
}));

const ServiceSection = () => {

  const serviceDetails = [
    {
      rating: 4,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Rohit Sharma',
      url: Customer_1
    },
    {
      rating: 5,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Vinay Kundal',
      url: Customer_3
    },
    {
      rating: 4,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Kayal',
      url: Customer_2
    },
    {
      rating: 5,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Naveen',
      url: Customer_1
    }
  ]

  return (
    <Container>
      <MainTitle fontSize='25px' color='#01a998'>
        Customer Feedback
      </MainTitle>
      <MainContentContainer>
        {
          serviceDetails.map(({ rating, text, name, url }) =>
            <FeedbackCard
              rating={rating}
              text={text}
              name={name}
              url={url}
            />
          )
        }

      </MainContentContainer>
    </Container>
  );
};

export default ServiceSection;
