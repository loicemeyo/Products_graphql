import Product from './models/product';
export const resolvers = {
    Query: {
        async getProduct(root, {
            _id
        }) {
            return await Product.findById(_id);
        },
        async allProducts(){
            return await Product.find()
        }
    },
    Mutation: {
        async createProduct(root, {
            input
        }) {
            return await Product.create(input);
        }
    },
    asnyc updateProduct(root, {
        _id,
        input
    }) {
        return await Product.findOneAndUpdate({
            _id
        }, input, {
            new: true
        })
    }
};