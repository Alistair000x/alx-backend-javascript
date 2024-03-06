// this function accept two promises
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}
