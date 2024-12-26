"use client";

import { ArrowUpDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { z } from "zod";
import { TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  amount: z.string().trim().min(1, { message: "Valor é obrigatório" }),
  type: z.nativeEnum(TransactionType, { required_error: "Tipo é obrigatório" }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "Método de pagamento é obrigatório",
  }),
  date: z.date({ required_error: "Data é obrigatória" }),
});

const AddTransactionButton = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      type: TransactionType.EXPENSE,
      paymentMethod: TransactionPaymentMethod.CASH,
      date: new Date(),
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowUpDownIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Transação</DialogTitle>
          <DialogDescription>Adicione uma nova transação</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormItem>
              )}
            />

<FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormItem>
              )}
            />

            <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionButton;
