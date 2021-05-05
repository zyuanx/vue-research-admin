import request from "@/utils/request";

export function listPermission() {
    return request({
        url: "/api/permission",
        method: "get",
    })
}

export function retrievePermission(id) {
    return request({
        url: `/api/permission/${id}`,
        method: "get",
    })
}

export function createPermission(data) {
    return request({
        url: "/api/permission",
        method: "post",
        data
    })
}
export function updatePermission(id, data) {
    return request({
        url: `/api/permission/${id}`,
        method: "put",
        data
    })
}



export function destroyPermission(id) {
    return request({
        url: `/api/permission/${id}`,
        method: "delete"
    })
}
