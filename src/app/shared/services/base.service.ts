//não vai ser um serviço do tipo injectable, vai ser uma classe abstrata
//Aqui vai tudo que será reutilizado pelos serviços

import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { throwError } from "rxjs";
import { environment } from "../../../environments/environment.prod";
import { LocalStorageUtils} from '../utils/localstorage';
import { IAppConfig, APP_CONFIG } from "web.config";
import { Injectable, Inject } from "@angular/core";


export  class BaseService{
  constructor(
   ) { }

    //protected: quem herda de baseservice pode acessar
    //public: qualquer um que esteja implementando um serviço que herde de baseservice pode acessar

    public LocalStorage = new LocalStorageUtils();

    //o import sempre deve ser src/environments/environment
    //ng s roda em modo de desenvolvimento
    //ng s --prod roda em modo de produção
    //os parametros estão definidos no arquivo angular.json no nó production/filereplacements
    protected UrlServiceV1: string = environment.apiUrlv1;
    protected UrlServiceLoginV1: string = environment.apiUrlLoginv1;

    //url metodo get
    public urlGetProfile = `${this.UrlServiceV1}/user/profile.php?UserId={UserId}&EmpresaId={EmpresaId}`
    public urlGetPessoas = `${this.UrlServiceV1}/listas/listas.php?tabela=v_profile&EmpresaId={EmpresaId}`;

    public urlGetContas = `${this.UrlServiceV1}/listas/listas.php?tabela=sf_contas&EmpresaId={EmpresaId}`;
    public urlGetCategorias = `${this.UrlServiceV1}/listas/listas.php?tabela=sf_categoria&EmpresaId={EmpresaId}`;
    public urlGetMetodos = `${this.UrlServiceV1}/listas/listas.php?tabela=sf_metodos&EmpresaId={EmpresaId}`;
    public urlGetFpgto = `${this.UrlServiceV1}/listas/listas.php?tabela=sf_forma_pgto&EmpresaId={EmpresaId}`;
    
    public urlGetFinanceiros = `${this.UrlServiceV1}/financeiro/sf.php?EmpresaId={EmpresaId}`

    public urlGetTotais = `${this.UrlServiceV1}/totais/getTotaisPeriodo.php?idUser={idUser}&idEmpresa={idEmpresa}`;
    
    //url metodo post
    public urlPostFinanceiros = `${this.UrlServiceV1}/financeiro/sf.php?EmpresaId={EmpresaId}`


    //Toda vez que chamar esse método, já irá retornar o header
    protected ObterHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    protected ObterHeaderUnlercoded(){
        return {
            headers: new HttpHeaders({
                  'Content-Type': 'application/x-www-form-urlencoded'
            })
        }
    }

    protected ObterAuthHeaderJson(){
        return{
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.LocalStorage.obterTokenUsuario()
            })
        }

    }

    //mapeia o nó do response para extrair somente o data
    // protected extractData(response: any){
    //     return response.data || {};
    // }

    protected extractData(response: any){
          return response || {};
    }

    //Tratamento de Erro
    //Vai receber um response ou qualquer coisa
    protected serviceError(response: Response | any) {

        //cria uma coleção de string
        let CustomError: string[] = [];

        //verifica se o erro é uma instancia de HttpErrorResponse
        if (response instanceof HttpErrorResponse) {

            //Aqui também pode ser tratados os erros pelos números
            if (response.statusText === "Unknown Error") {
                //CustomError.push("Ocorreu um erro desconhecido");
                //response.error.errors = CustomError;

                return throwError(() => 'Falha na comunicação - tente novamente mais tarde')
            }
            else if (response.status === 400) {
                CustomError.push("Erros de validação");
               // response.error.errors = CustomError;
            }
            else if (response.status === 401) {
                return throwError(() => '401 - Sem autorização')
            }
            else if (response.status === 403) {
                return throwError(() => '403 - Sem autorização')
            }
        }

        console.error(response.error);
        return throwError(() => response);
    }

}
