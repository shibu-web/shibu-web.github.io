import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { testControllerTestGet } from "@/api/test/test";

export const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);

  const handleSubmit = async () => {
    const res = await testControllerTestGet(name, { testNumber: number });
    console.log(res);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Home</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <Button onClick={handleSubmit}>送信</Button>
        </CardContent>
      </Card>
    </div>
  );
};
