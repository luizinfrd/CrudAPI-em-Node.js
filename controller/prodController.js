const produto = require('../models/produto')

exports.obterProdutos = async (req, res) => {
    try{
        const produtos = await produto.find()
        res.json(produtos)
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar produtos'})
    }
}

exports.adicionarProdutos = async (req, res) => {
    const newProd = req.body
    try{
        await produto.create(newProd)
        res.json({message: 'Produto criado com sucesso'})
    } catch (error) {
        res.status(500).json({error: 'Erro ao adicionar produto'})
    }
}

exports.atualizarProdutos = async (req, res) => {
    const prodId = req.params.id
    const updatedProd = req.body
    try{
        await produto.findByIdAndUpdate(prodId, updatedProd)
        res.json({message: 'Produto atualizado com sucesso'})
    } catch (error){
        res.status(500).json({error: 'Erro ao atualizar produto'})
    }
}

exports.excluirProdutos = async (req, res) => {
    const prodId = req.params.id
    try{
        await task.findByIdAndDelete(prodId)
        res.json({message: 'Produto deletado com sucesso'})
    } catch (error){
        res.status(500).json({error: 'Erro ao excluir produto'})
    }
}