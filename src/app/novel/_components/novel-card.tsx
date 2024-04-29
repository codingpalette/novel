import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NovelCardProps {
  title: string;
  content: string;
  genre: string;
  id: string;
  novel: string;
}

export default function NovelCard({
  title,
  content,
  genre,
  id,
  novel,
}: NovelCardProps) {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* 줄바꿈이 되어야 한다 */}
          <div className="whitespace-pre-wrap">{novel}</div>

          {/* <div>{novel}</div> */}
        </CardContent>
      </Card>
    </>
  );
}
