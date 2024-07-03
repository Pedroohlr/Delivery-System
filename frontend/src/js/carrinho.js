export default function carrinho(){
    let valorTotal = parseFloat(localStorage.getItem('valorTotal') || 0);
    let qtdItens = parseFloat(localStorage.getItem('qtdItens') || 0);

    document.querySelector('.carrinho').innerHTML = `
<div style="cursor:pointer; background-color:#999; padding: 10px; border-radius: 5px; display: flex; align-items: center; position: fixed; top: 10px; right: 10px;">
    <img style="max-width: 60px; margin-right: 10px;" src="../../img/iconCarrinho.svg" alt="foto do carrinho">
    <div>
        <p class="valorTotal" style="margin: 0; font-size: 14px; color:#000;"><strong>R$${valorTotal.toFixed(2) || 0}</strong></p>
        <p class="itens" style="margin: 0; font-size: 12px;color:#000;">${qtdItens || 0} itens</p>
    </div>
</div>
`;
}

export function user(){
    const userPhoto = localStorage.getItem("userPhoto");
    const userName = localStorage.getItem('userName');
    document.querySelector(".user").innerHTML = `
    <img style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" src="${userPhoto}" alt="User Photo">
    <p style="color:#000;">${userName}</p>
    <a href="../../cadastro/html/userConta.html" style="font-size:13px;">Acessar Conta</a>
`;
}