import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, Globe } from "lucide-react";

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/shibu-avatar.jpg" alt="Shibu" />
              <AvatarFallback className="text-4xl">S</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl">Shibu</CardTitle>
          <CardDescription className="text-lg">
            プロダクトマネージャー
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* 自己紹介 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">自己紹介</h2>
            <p className="text-muted-foreground">
              こんにちは、Shibuです。自己紹介後で作りますね。
              <span className="text-sm block mt-2 italic"></span>
            </p>
          </section>

          <Separator />

          {/* スキル */}
          <section>
            <h2 className="text-xl font-semibold mb-3">スキル</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Next.js</Badge>
              <Badge>GraphQL</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge variant="outline" className="text-muted-foreground">
                ※その他のスキルは後で追加
              </Badge>
            </div>
          </section>

          <Separator />

          {/* 経歴 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">経歴</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">プロダクトマネージャー</h3>
                <p className="text-sm text-muted-foreground">
                  2025年2月 - 現在 | 株式会社Unyte
                </p>
                <p className="text-sm mt-1"></p>
              </div>
              <div>
                <h3 className="font-medium">
                  制御・知能化システム開発エンジニア
                </h3>
                <p className="text-sm text-muted-foreground">
                  2023年4月 - 2025年2月 | 前職入れるか迷うなあ
                </p>
                <p className="text-sm mt-1">制御・知能化システムの開発を担当</p>
              </div>
              <p className="text-sm italic text-muted-foreground"></p>
            </div>
          </section>

          <Separator />

          {/* プロジェクト */}
          <section>
            <h2 className="text-xl font-semibold mb-3">プロジェクト</h2>
            <div className="grid gap-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">
                    プロジェクト名（後で追加）
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm italic text-muted-foreground text-center">
                ※元気があれば後で追加します。
              </p>
            </div>
          </section>

          <Separator />

          {/* 連絡先 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">連絡先</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                メール（後で追加）
              </Button>
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub（後で追加）
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter（後で追加）
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="mr-2 h-4 w-4" />
                ウェブサイト（後で追加）
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
