import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: 'mongodb+srv://abhishek:Qwerty123@cluster0.5oand.mongodb.net/?retryWrites=true&w=majority',
  
}));
