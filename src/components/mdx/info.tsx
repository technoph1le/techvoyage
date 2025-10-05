import { Card, CardContent } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
}

export default function Info({ children }: Props) {
  return (
    <Card className="border border-accent bg-accent/20">
      <CardContent>{children}</CardContent>
    </Card>
  );
}
