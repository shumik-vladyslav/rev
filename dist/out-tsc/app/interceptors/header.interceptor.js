"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_storage_1 = require("../auth/token.storage");
var AuthHeaderInterceptor = /** @class */ (function () {
    function AuthHeaderInterceptor() {
    }
    AuthHeaderInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header
        var token = new token_storage_1.TokenStorage();
        var tokenVal = token.getToken();
        var clonedRequest = req.clone({
            headers: req
                .headers
                .set('Authorization', tokenVal ? "Bearer " + tokenVal : '')
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    };
    return AuthHeaderInterceptor;
}());
exports.AuthHeaderInterceptor = AuthHeaderInterceptor;
//# sourceMappingURL=header.interceptor.js.map