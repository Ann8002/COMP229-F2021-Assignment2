/* <!--COMP229-F2021-SB-P-ASSIGNMENT2 - Sindhu Binil, ID# 301150331 17-10-2021-->  */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; // alias for mongoose Schema
const InformSchema = new Schema({
    name: String,
    number: String,
    email: String
}, {
    collection: "address"
});
const Model = mongoose_1.default.model("Inform", InformSchema);
exports.default = Model;
//# sourceMappingURL=inform.js.map

/* GET Route for displaying Add page - CREATE Operation */

router.get('/add', (req, res, next) => {

});

/* GET Route for processing Add page - CREATE Operation */
router.post('/add', (req, res, next) => {

});
/* GET Route for displaying Edit page - CREATE Operation */
router.get('/edit/:id', (req, res, next) => {

});
/* GET Route for processing Add page - CREATE Operation */
router.post('/edit/:id', (req, res, next) => {

});
/* GET to perform Deletion - DELETE Operation */

router.get('/delete/:id', (req, res, next) => {

});

module.exports = router;