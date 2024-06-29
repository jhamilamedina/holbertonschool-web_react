interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return {
    credits: subject1 + subject2,
    brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {
    credits: subject1 + subject2,
    brand: 'MinorCredits',
  };
}

// Ejemplo de uso
const majorResult = sumMajorCredits(3, 4);
console.log(`The ${majorResult.brand} is ${majorResult.credits}`);

const minorResult = sumMinorCredits(2, 3);
console.log(`The ${minorResult.brand} is ${minorResult.credits}`);
