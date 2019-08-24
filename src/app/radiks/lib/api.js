"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyModel = exports.fetchCentral = exports.saveCentral = exports.count = exports.find = exports.sendNewGaiaUrl = void 0;

var _qs = require("qs");

var _config = require("./config");


const sendNewGaiaUrl = async gaiaURL => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const url = `${apiServer}/radiks/models/crawl`; // console.log(url, gaiaURL);
  const data = {
    gaiaURL
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  console.log('after gaia fetch', response);
  const {
    success,
    message
  } = await response.json();
  
  if (!success) {
    throw new Error(`Error when saving model: '${message}'`);
  }

  return success;
};

exports.sendNewGaiaUrl = sendNewGaiaUrl;

const find = async query => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const queryString = (0, _qs.stringify)(query, {
    arrayFormat: 'brackets',
    encode: false
  });
  const url = `${apiServer}/radiks/models/find?${queryString}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

exports.find = find;

const count = async query => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const queryString = (0, _qs.stringify)(query, {
    arrayFormat: 'brackets',
    encode: false
  });
  const url = `${apiServer}/radiks/models/count?${queryString}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

exports.count = count;

const saveCentral = async data => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const url = `${apiServer}/radiks/central`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  const {
    success
  } = await response.json();
  return success;
};

exports.saveCentral = saveCentral;

const fetchCentral = async (key, username, signature) => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const queryString = (0, _qs.stringify)({
    username,
    signature
  });
  const url = `${apiServer}/radiks/central/${key}?${queryString}`;
  const response = await fetch(url);
  const value = await response.json();
  return value;
};

exports.fetchCentral = fetchCentral;

const destroyModel = async model => {
  const {
    apiServer
  } = (0, _config.getConfig)();
  const queryString = (0, _qs.stringify)({
    signature: model.attrs.radiksSignature
  });
  const url = `${apiServer}/radiks/models/${model._id}?${queryString}`;
  const response = await fetch(url, {
    method: 'DELETE'
  });
  const data = await response.json();
  console.log(data);
  return data.success;
};

exports.destroyModel = destroyModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkudHMiXSwibmFtZXMiOlsic2VuZE5ld0dhaWFVcmwiLCJnYWlhVVJMIiwiYXBpU2VydmVyIiwidXJsIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJqc29uIiwiRXJyb3IiLCJmaW5kIiwicXVlcnkiLCJxdWVyeVN0cmluZyIsImFycmF5Rm9ybWF0IiwiZW5jb2RlIiwiY291bnQiLCJzYXZlQ2VudHJhbCIsImZldGNoQ2VudHJhbCIsImtleSIsInVzZXJuYW1lIiwic2lnbmF0dXJlIiwidmFsdWUiLCJkZXN0cm95TW9kZWwiLCJtb2RlbCIsImF0dHJzIiwicmFkaWtzU2lnbmF0dXJlIiwiX2lkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdPLE1BQU1BLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQTZDO0FBQ3pFLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFnQix3QkFBdEI7QUFDQSxRQUFNQyxHQUFHLEdBQUksR0FBRUQsU0FBVSxzQkFBekIsQ0FGeUUsQ0FHekU7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHO0FBQUVILElBQUFBO0FBQUYsR0FBYjtBQUNBLFFBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILEdBQUQsRUFBTTtBQUNoQ0ksSUFBQUEsTUFBTSxFQUFFLE1BRHdCO0FBRWhDQyxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBRjBCO0FBR2hDTyxJQUFBQSxPQUFPLEVBQUUsSUFBSUMsT0FBSixDQUFZO0FBQ25CLHNCQUFnQjtBQURHLEtBQVo7QUFIdUIsR0FBTixDQUE1QjtBQU9BLFFBQU07QUFBRUMsSUFBQUEsT0FBRjtBQUFXQyxJQUFBQTtBQUFYLE1BQXVCLE1BQU1ULFFBQVEsQ0FBQ1UsSUFBVCxF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QVlDO0FBQXpCLEdBQVYsQ0FBcEI7QUFDQSxRQUFNN0IsR0FBRyxHQUFJLEdBQUVELFNBQVUsa0JBQWlCNEIsS0FBSyxDQUFDRyxHQUFJLElBQUdkLFdBQVksRUFBbkU7QUFDQSxRQUFNZCxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFELEVBQU07QUFDaENJLElBQUFBLE1BQU0sRUFBRTtBQUR3QixHQUFOLENBQTVCO0FBR0EsUUFBTUgsSUFBSSxHQUFHLE1BQU1DLFFBQVEsQ0FBQ1UsSUFBVCxFQUFuQjtBQUNBbUIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkvQixJQUFaO0FBQ0EsU0FBT0EsSUFBSSxDQUFDUyxPQUFaO0FBQ0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3FzJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNvbnN0IHNlbmROZXdHYWlhVXJsID0gYXN5bmMgKGdhaWFVUkw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBjb25zdCB7IGFwaVNlcnZlciB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IHVybCA9IGAke2FwaVNlcnZlcn0vcmFkaWtzL21vZGVscy9jcmF3bGA7XG4gIC8vIGNvbnNvbGUubG9nKHVybCwgZ2FpYVVSTCk7XG4gIGNvbnN0IGRhdGEgPSB7IGdhaWFVUkwgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3QgeyBzdWNjZXNzLCBtZXNzYWdlIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGlmICghc3VjY2Vzcykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igd2hlbiBzYXZpbmcgbW9kZWw6ICcke21lc3NhZ2V9J2ApO1xuICB9XG4gIHJldHVybiBzdWNjZXNzO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBGaW5kUXVlcnkge1xuICBsaW1pdD86IG51bWJlcixcbiAgW3g6IHN0cmluZ106IGFueSxcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBhc3luYyAocXVlcnk6IEZpbmRRdWVyeSkgPT4ge1xuICBjb25zdCB7IGFwaVNlcnZlciB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnLCBlbmNvZGU6IGZhbHNlIH0pO1xuICBjb25zdCB1cmwgPSBgJHthcGlTZXJ2ZXJ9L3JhZGlrcy9tb2RlbHMvZmluZD8ke3F1ZXJ5U3RyaW5nfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgY291bnQgPSBhc3luYyAocXVlcnk6IEZpbmRRdWVyeSkgPT4ge1xuICBjb25zdCB7IGFwaVNlcnZlciB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnLCBlbmNvZGU6IGZhbHNlIH0pO1xuICBjb25zdCB1cmwgPSBgJHthcGlTZXJ2ZXJ9L3JhZGlrcy9tb2RlbHMvY291bnQ/JHtxdWVyeVN0cmluZ31gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuaW50ZXJmYWNlIENlbnRyYWxTYXZlRGF0YSB7XG4gIHNpZ25hdHVyZTogc3RyaW5nLFxuICB1c2VybmFtZTogc3RyaW5nLFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVDZW50cmFsID0gYXN5bmMgKGRhdGE6IENlbnRyYWxTYXZlRGF0YSkgPT4ge1xuICBjb25zdCB7IGFwaVNlcnZlciB9ID0gZ2V0Q29uZmlnKCk7XG4gIGNvbnN0IHVybCA9IGAke2FwaVNlcnZlcn0vcmFkaWtzL2NlbnRyYWxgO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHsgc3VjY2VzcyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gc3VjY2Vzcztcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENlbnRyYWwgPSBhc3luYyAoa2V5OiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIHNpZ25hdHVyZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgYXBpU2VydmVyIH0gPSBnZXRDb25maWcoKTtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBzdHJpbmdpZnkoeyB1c2VybmFtZSwgc2lnbmF0dXJlIH0pO1xuICBjb25zdCB1cmwgPSBgJHthcGlTZXJ2ZXJ9L3JhZGlrcy9jZW50cmFsLyR7a2V5fT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgdmFsdWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXN0cm95TW9kZWwgPSBhc3luYyAobW9kZWw6IE1vZGVsKSA9PiB7XG4gIGNvbnN0IHsgYXBpU2VydmVyIH0gPSBnZXRDb25maWcoKTtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBzdHJpbmdpZnkoeyBzaWduYXR1cmU6IG1vZGVsLmF0dHJzLnJhZGlrc1NpZ25hdHVyZSB9KTtcbiAgY29uc3QgdXJsID0gYCR7YXBpU2VydmVyfS9yYWRpa3MvbW9kZWxzLyR7bW9kZWwuX2lkfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YS5zdWNjZXNzO1xufTtcbiJdfQ==