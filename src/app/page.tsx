import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between ">
      <nav className="absolute right-2 top-2">
        <ModeToggle />
      </nav>

      <aside className="hidden lg:block">
        <Image src="/login.png" alt="" width={554} height={832} />
      </aside>

      <section className="flex flex-col items-center w-full space-y-7 ">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48" />
        </svg>
        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

        <Tabs defaultValue="entrar">
          <TabsList className="flex items-center w-full">
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="" className="space-y-2">
              <div>
                <Label htmlFor="email">email</Label>
                <Input id="email" />
              </div>

              <div>
                <Label htmlFor="senha">senha</Label>
                <Input id="senha" type="password" />
              </div>

              <Button type="submit">entrar</Button>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <form action="" className="space-y-2 ">
              <div>
                <Label htmlFor="nome" className="">nome</Label>
                <Input id="nome" />
              </div>

              <div>
                <Label htmlFor="bio">bio</Label>
                <Input id="bio" />
              </div>

              <div>
                <Label htmlFor="email">email</Label>
                <Input id="email" type="email" />
              </div>

              <div>
                <Label htmlFor="senha">senha</Label>
                <Input id="senha" type="password" />
              </div>
              <div className="flex flex-col items-center w-full">
                <Button type="submit">criar conta</Button>
              </div>
            </form>
          </TabsContent>

        </Tabs>


      </section>

    </main>
  );
}
