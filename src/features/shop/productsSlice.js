import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { get }  from '../../api/client'

const ProductInitialState = {
  name : "shop",
  initialState : {
    id : 0,
    name : 'product',
    description : 'product for comrade',
    img_url : 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/1595/brand.gif?itok=BocODtcV&f=1&nofb=1',
    price : 0,
  },
  reducer : {}
}
const initialState = {
  products: [],
  status: 'idle',
  error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', 
  async () => {  
    const response = await get('project')
    return response
  })

const productsSlice = createSlice({  name: 'products',
  initialState,
  reducers: {    
    productAdded: {      
      reducer(state, action) {        
        state.products.push(action.payload)
      },      
      prepare(title, content, userId) {        
        // omit prepare logic      
      }    
    },    
    reactionAdded(state, action) {      
      const { productId, reaction } = action.payload      
      const existingProduct = state.products.find(product => product.id === productId)      
      if (existingProduct) {        
        existingProduct.reactions[reaction]++      
      }    
    },    
    productUpdated(state, action) {      
      const { id, title, content } = action.payload      
      const existingProduct = state.products.find(product => product.id === id)      
      if (existingProduct) {        
        existingProduct.title = title        
        existingProduct.content = content      
      }    
    },
    
  },
  extraReducers: {    
    [fetchProducts.pending]: (state, action) => {      
        state.status = 'loading'    
      },
    [fetchProducts.fulfilled]: (state, action) => {      
      state.status = 'succeeded'      
      // Add any fetched products to the array      
      state.products = state.products.concat(action.payload)    
    },    
    [fetchProducts.rejected]: (state, action) => {      
      state.status = 'failed'      
      state.error = action.error.message    
    }  
  }
})

export const { productAdded, productUpdated, reactionAdded } = productsSlice.actions

export default productsSlice.reducer

export const selectAllProducts = state => state.products.products

export const selectProductById = (state, productId) =>{
  //console.log(productId)
  return state.products.products.find(product => product.id === productId)
}
