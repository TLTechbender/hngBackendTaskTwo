# Number Classification API Documentation

## Overview

REST API that provides mathematical properties and fun facts about numbers.

## Base URL

`https://your-domain.com/api`

## Endpoints

### Get Number Classification

`GET /classify-number`

Analyzes a number and returns its mathematical properties.

#### Query Parameters

| Parameter | Type    | Required | Description           |
| --------- | ------- | -------- | --------------------- |
| number    | integer | Yes      | The number to analyze |

#### Response Format

**Success (200 OK)**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number..."
}
```

**Error (400 Bad Request)**

```json
{
  "number": "invalid_input",
  "error": true
}
```

#### Properties Array Combinations

- `["armstrong", "odd"]`: Armstrong number that's odd
- `["armstrong", "even"]`: Armstrong number that's even
- `["odd"]`: Non-Armstrong odd number
- `["even"]`: Non-Armstrong even number

## Mathematical Properties

### Prime Numbers

A number greater than 1 that's only divisible by 1 and itself.

### Perfect Numbers

A positive integer equal to the sum of its proper divisors.

### Armstrong Numbers

A number equal to the sum of its digits raised to the power of the number of digits.

### Digit Sum

Sum of all individual digits in the number.

## Technical Details

### Stack

- TypeScript
- Express.js
- Zod (validation)
- Axios

### Installation

```bash
npm install
npm run dev   # Development
npm start     # Production
npm run build # Build TypeScript
```

### Environment Variables

- `PORT`: Server port (default: 3000)

### Error Handling

- 400: Invalid input
- 500: Server error

## Examples

### Valid Request

```bash
curl "http://localhost:3000/api/classify-number?number=371"
```

### Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number..."
}
```

## CORS

Enabled for all origins.

## Dependencies

- cors: ^2.8.5
- express: ^4.18.2
- axios: ^1.7.9
- zod: ^3.22.4
