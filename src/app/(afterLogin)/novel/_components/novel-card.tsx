import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface NovelCardProps {
  genre?: string;
  novel: string;
}

export default function NovelCard({ novel }: NovelCardProps) {
  return (
    <>
      <Card className="w-full">
        <CardContent>
          {/* 줄바꿈이 되어야 한다 */}
          <div className="whitespace-pre-wrap pt-4">{novel}</div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">계시하기</Button>
        </CardFooter>
      </Card>
    </>
  );
}
