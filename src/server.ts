import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { NumberSchema } from './validation';
import { classifyNumber } from './numberClassification';


const app = express();
const PORT =  3000000;

app.use(cors());
app.use(express.json());

app.get('/api/classify-number', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validationResult = NumberSchema.safeParse(req.query);
  
        if (!validationResult.success) {
      console.error(validationResult.error.errors)
        res.status(400).json({
          number: req.query.number,
          error: true,
          
        });
        return; 
      }
  
      const number = validationResult.data.number;
      const result = await classifyNumber(number);
  
      res.json(result);
    } catch (error) {
      next(error); 
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
