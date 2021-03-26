
// to get our blockchain we call this
function get_chain(req, res, blockchain) {
    var response =  {
                        'chain': blockchain.chain,
                        'length': blockchain.chain.length
                    }
    return res.send(response);
}
// This function checks full blockchain in a valid situation or not
function is_valid(req, res, blockchain) {
    if(blockchain.isChainValid(blockchain.chain))
        return res.send({'message': 'All good. The Blockchain is valid.'})
    else
        return res.send({'message': 'Houston, we have a problem. The Blockchain is not valid.'})
}

// This function add a transaction in his own tansaction pool
function add_transaction(req,res,blockchain){
    var body = req.body
    // We must have sender,receiver and amount
    var transaction_keys = ['sender', 'receiver', 'amount'] 
    for(let key of transaction_keys)
        if(body[key] === undefined)
            return res.send('Some elements of the transaction are missing')       
    var response = {'message': `This transaction will be added to next Block`}
    return res.send(response)
}

// connect with other nodes with IP address in a local network
function connect_node(req,res,blockchain)
{
    var body = req.body
    if(body['nodes']=== undefined)
        return res.send("No Node")
    for(let node of body['nodes'])
        // console.log(node)    
    blockchain.addNode(node)
    console.log(blockchain.node_list)
    var response = {
                        'message': 'All the nodes are now connected. The Hadcoin Blockchain now contains the following nodes:',
                        'total_nodes': blockchain.node_list.size
                    }
    return res.send(response)
}



module.exports = {get_chain,is_valid,add_transaction,connect_node};