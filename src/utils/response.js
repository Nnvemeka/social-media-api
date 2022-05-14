function response(message, data, success) {
    return {
        message: formatMessage(message),
        data: data || null,
        success: success == null ? true : success
    }
}

function formatMessage(str) {
    if (!str) return ""

    // Make first letter capital
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = response