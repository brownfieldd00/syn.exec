-- Tested for SX
-- Write exec to syn
local port = 5555
setreadonly(getgenv().syn, false)
getgenv().syn.set_port = function(p)
    port = p
end
getgenv().syn.exec = function(data)
    local url = ('http://localhost:%s/'):format(port)
    local headers = {
        execute = tostring(data)
    }
    local req = syn.request({
        Method = 'POST',
        Url = url,
        Headers = headers
    })
    if not req.Body then
        warn('syn.exec will not work until the Server is launched.')
        return false
    end
    return game:GetService('HttpService'):JSONDecode(req.Body)
end
setreadonly(getgenv().syn, true)