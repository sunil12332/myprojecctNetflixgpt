
import OpenAI from 'openai';
//import { OPENAI_KEY } from './constraints';
const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;


const openai = new OpenAI({
  apiKey: OPENAI_KEY,// This is the default and can be omitted
 dangerouslyAllowBrowser:true,
});



export default openai;