import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image src="/logo.svg" alt="Logo Finance AI" width={173} height={39} className="mb-8" />
        <h1 className="text-4xl font-bold mb-3">Bem-vindo(a)</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
            <LogInIcon size={24} className="mr-2" />
            Entrar com Google
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src="/login.png"
          alt="Login Image"
          fill
        />
      </div>
    </div>
  );
};

export default LoginPage;
