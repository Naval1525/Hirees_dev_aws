import cache from 'node-cache'
export const cacheMiddleware = (req, res, next) => {
    const cacheKey = req.originalUrl; // Cache based on URL
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
        return res.json(cachedResponse); // Return cached response
    }

    res.sendResponse = res.json; // Save original `json` method
    res.json = (body) => {
        cache.set(cacheKey, body, 3600); // Cache for 1 hour
        res.sendResponse(body); // Send response
    };
    next();
};