


 class Blockchain{
    constructor(){
        this.chain = []
        this.transactions = []
        this.createBlock(1,'0') 
        this.node_list = new Set()
    }
    createBlock(proof, previous_hash){
        var block = {
                        'index': this.chain.length + 1,
                        'timestamp': new Date(),
                        'proof': proof,
                        'previous_hash': previous_hash,
                        'transactions': this.transactions
                    }

        this.transactions = []
        this.chain.push(block)
        // console.log(block)
        
        return block
    }

    getPreviousBlock(){
        return this.chain[this.chain.length-1]
    }
        
    proofOfWork(prev_proof){
        var new_proof = 1
        var check_proof = false
        while(check_proof==false){
            
            var value = Math.pow(new_proof,2) - Math.pow(prev_proof,2)

            var hash_operation = sha256(value.toString())
            
            if (hash_operation.slice(0,4) === '0000')
                check_proof = true
            else
                new_proof += 1
            // console.log(hash_operation)
            // console.log(hash_operation.slice(0,4))
        }
        return new_proof
    }

    hash(block)
    {
        return sha256(block.toString())
    }


    isChainValid(chain){
        var previous_block = chain[0]
        var block_index = 1
        while (block_index < (chain.length)){
            var block = this.chain[block_index]
            if (block['previous_hash'] != hash(previous_block))
                return false
            previous_proof = previous_block['proof']
            proof = block['proof']
            var hash_operation = sha256((Math.pow(new_proof,2) - Math.pow(prev_proof,2)).toString)
            if (hash_operation.slice(0,4) != '0000'){
                return false
            }
            previous_block = block
            block_index += 1
        }
        return true
    }
    addTransaction(sender, receiver, amount){
        this.transactions.push({
                                    'sender': sender,
                                    'receiver': receiver,
                                    'amount': amount
                                })
        var previous_block = this.getPreviousBlock()
        return previous_block['index'] + 1
    }

    addNode(ip_address){
        this.node_list.add(ip_address)
    }
    replace_chain()
    {
        var network = this.node_list
        var longest_chain = None
        var max_length = this.chain.length
        for (node in network){
            
            // var response = requests.get(f'http://{node}/get_chain')
            // if (response.status_code == 200){
            //     length = response.json()['length']
            //     chain = response.json()['chain']
            //     if (length > max_length && this.is_chain_valid(chain)){
            //         max_length = length
            //         longest_chain = chain
            //     }
            // }
        }        
        if (longest_chain){
            this.chain = longest_chain
            return True
        }
        return False
    }
};

module.exports = Blockchain;