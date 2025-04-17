import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Calculator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const isOperator = (char: string) => ["+", "-", "*", "/"].includes(char);

  const handleButtonClick = useCallback((value: string) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        // Basic validation
        if (!input || isOperator(input[input.length - 1])) {
          setResult('Invalid expression');
          return;
        }
        const calculatedResult = eval(input);
        if (!isFinite(calculatedResult)) {
          setResult('Cannot divide by zero');
          return;
        }
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(prev => {
        // Prevent multiple operators in a row
        if (isOperator(value) && isOperator(prev[prev.length - 1])) {
          return prev;
        }
        // Prevent multiple decimal points in a number
        if (value === '.' && prev.split(/[-+*/]/).pop()?.includes('.')) {
          return prev;
        }
        // Prevent leading operators except minus
        if (!prev && isOperator(value) && value !== '-') {
          return prev;
        }
        return prev + value;
      });
    }
  }, [input]);

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'Enter') {
        handleButtonClick('=');
      } else if (key === 'Escape') {
        handleButtonClick('C');
      } else if (
        /[0-9]/.test(key) ||
        key === '.' ||
        ["+", "-", "*", "/"].includes(key)
      ) {
        handleButtonClick(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleButtonClick]);

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+'
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <Card className="p-6 w-full max-w-md shadow-lg">
        <div className="mb-4 p-4 bg-muted rounded-md overflow-hidden">
          <div className="text-right text-2xl font-mono truncate">{input || '0'}</div>
          <div className="text-right text-lg font-mono text-muted-foreground truncate">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <Button
              key={btn}
              variant={isOperator(btn) ? 'secondary' : 'outline'}
              size="lg"
              onClick={() => handleButtonClick(btn)}
              className={`font-mono hover:scale-[0.98] transition-transform ${btn === 'C' ? 'hover:bg-destructive hover:text-destructive-foreground' : ''}`}
            >
              {btn}
            </Button>
          ))}
          <Button
            variant="default"
            size="lg"
            onClick={() => handleButtonClick('=')}
            className="col-span-4 font-mono hover:scale-[0.98] transition-transform"
          >
            =
          </Button>
        </div>
      </Card>
    </div>
  );
}
