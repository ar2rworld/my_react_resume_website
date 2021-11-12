export const get = async (object) => {
  const res = await fetch(`http://ec2-3-141-45-250.us-east-2.compute.amazonaws.com:8000/${object}/`);
  // fetching the data from api, before the page loaded
  const objects = await res.json();
  return objects
}

