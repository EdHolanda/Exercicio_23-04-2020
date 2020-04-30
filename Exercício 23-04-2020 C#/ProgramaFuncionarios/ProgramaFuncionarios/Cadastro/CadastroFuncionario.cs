using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cadastro
{
    class Funcionario
    {
        public static Hashtable Novo()
        {
            Console.WriteLine("Matrícula:");
            var codigo = Console.ReadLine();
            Console.WriteLine("Nome:");
            var nome = Console.ReadLine();
            Console.WriteLine("Salário:");
            double salario = double.Parse(Console.ReadLine());
            double vale = salario * 0.3;
            double liquido = salario - vale;

            Hashtable DadosCadastrados = new Hashtable();
            {
                DadosCadastrados.Add("Matrícula", codigo);
                DadosCadastrados.Add("Nome", nome);
                DadosCadastrados.Add("Salário", salario);
                DadosCadastrados.Add("Vale", vale);
                DadosCadastrados.Add("Líquido", liquido);
            }

            return (DadosCadastrados);

        }

      
    }
}
