"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//import swaggerDocument from "./swagger/swagger.yaml"
const yamljs_1 = __importDefault(require("yamljs"));
const swaggerDocument = yamljs_1.default.load('./swagger/swagger.yaml');
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)()); /* NEW */
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/', route_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
