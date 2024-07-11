import { usuarioLogado } from "../models/usuariologado.model";

export class LocalStorageUtils {
  usuario: usuarioLogado = new usuarioLogado;

  public obterUsuario() {
    const userStr = localStorage.getItem('bitADMIN.user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }


  public salvarDadosLocaisUsuario(response: any) {
    this.salvarTokenUsuario(response.access_token);
    this.salvarUsuario(response);
  }

  public limparDadosLocaisUsuario(){
    localStorage.removeItem('bitADMIN.token');
    localStorage.removeItem('bitADMIN.user');
  }

  public salvarTokenUsuario(token: string) {
    localStorage.setItem('bitADMIN.token', token);
  }

  public salvarUsuario(response: any) {
    this.usuario.id = response.usuarioToken.id;
    this.usuario.id_empresa = response.usuarioToken.idEmpresa;
    this.usuario.username = response.usuarioToken.userName;
    this.usuario.claims = response.usuarioToken.claims;

    localStorage.setItem('bitADMIN.user', JSON.stringify(this.usuario));
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('bitADMIN.token') ?? '';
  }


}

