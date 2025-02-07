import axios from "axios";
interface NumberProperties {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact: string;
}

export async function classifyNumber(number: number): Promise<NumberProperties> {
  const isPrime = checkPrimeNumber(number);
  const isPerfect = checkPerfectNumber(number);
  const isArmstrong = checkArmstrongNumber(number);
  const digitSum = calculateDigitSum(number);
  const properties = determineProperties(number, isArmstrong);
  const funFact = await fetchNumberFact(number);
  
  return {
    number,
    is_prime: isPrime,
    is_perfect: isPerfect,
    properties,
    digit_sum: digitSum,
    fun_fact: funFact
  };
}

function determineProperties(number: number, isArmstrong: boolean): string[] {
    if (isArmstrong) {
      return number % 2 === 0 ? ["armstrong", "even"] : ["armstrong", "odd"];
    }
    return number % 2 === 0 ? ["even"] : ["odd"];
}
  

function checkPrimeNumber(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkPerfectNumber(n: number): boolean {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n && n > 1;
}

function checkArmstrongNumber(n: number): boolean {
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
  return sum === n;
}

function calculateDigitSum(n: number): number {
  return String(Math.abs(n)).split('').reduce((acc, digit) => acc + Number(digit), 0);
}

async function fetchNumberFact(number: number): Promise<string> {
    try {
      const response = await axios.get(`http://numbersapi.com/${number}/math`);
      return response.data;
    } catch (error) {
      return 'No fun fact available';
    }
  }