"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 70613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useRequestProcessor),
/* harmony export */   c: () => (/* binding */ getApiPath)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79847);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34722);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30012);
/* __next_internal_client_entry_do_not_use__ useRequestProcessor,getApiPath auto */ 
function useRequestProcessor() {
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__/* .useQueryClient */ .NL)();
    function useQueryFxn(key, queryFunction, options = {}) {
        return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
            queryKey: key,
            queryFn: queryFunction,
            ...options
        });
    }
    function useQueriesFxn(arr, fetchUserById, key) {
        return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQueries */ .h)({
            queries: arr.map((element)=>{
                return {
                    queryKey: [
                        key
                    ],
                    queryFn: ()=>fetchUserById(element)
                };
            })
        });
    }
    function useMutationFxn(key, setIsLoading, mutationFunction, options = {}) {
        return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useMutation */ .D)({
            mutationKey: key,
            mutationFn: mutationFunction,
            onMutate: ()=>{
                setIsLoading(true);
            // console.log("setIsLoading true");
            },
            onSettled: ()=>{
                queryClient.invalidateQueries(key);
                setIsLoading(false);
            // console.log("setIsLoading false");
            },
            ...options
        });
    }
    return {
        useQueryFxn,
        useMutationFxn,
        useQueriesFxn
    };
}
function getApiPath() {
    return `https://api.everyeventdelivery.com/v1`;
}


/***/ })

};
;