#
1. User schema -> name, email, password, isActive, userType {user, admin}
2. Order schema -> userId, phoneModelId, price, quantity, totalAmount

GET /users
POST /users
GET /users/:id

GET /orders
POST /orders
GET users/:userId/orders/:orderId




# Create model "brands"
- name
- slug - unique, auto create it in lowercase(name). Replace space with hyphen
- logo
- isActive

Create model "models"
- name
- brandId - ref
- images - Array of string
- processor - 
- ram - Number (in GB)
- Storage - Number (in GB)
- screenSize - Number
- isActive


Create apis
POST /brands -> createBrand
GET /brands -> getBrands
POST /models -> createModel
GET /brands/:id/models -> getModelByBrandId