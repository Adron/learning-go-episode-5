document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css">')
document.write('<div id=\"gist94445100\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-disable-hyper-v-ps1\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-powershell \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Remember, all of these commands need executed via Powershell that is started/opened with &quot;Run As Administrator&quot;.<span class=\"pl-c\"><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Disabling Hyper-V<span class=\"pl-c\"><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">Disable-WindowsOptionalFeature<\/span> <span class=\"pl-k\">-<\/span>Online <span class=\"pl-k\">-<\/span>FeatureName Microsoft<span class=\"pl-k\">-<\/span>Hyper<span class=\"pl-k\">-<\/span>V<span class=\"pl-k\">-<\/span>Hypervisor<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Enabling Hyper-V<span class=\"pl-c\"><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">Enable-WindowsOptionalFeature<\/span> <span class=\"pl-k\">-<\/span>Online <span class=\"pl-k\">-<\/span>FeatureName Microsoft<span class=\"pl-k\">-<\/span>Hyper<span class=\"pl-k\">-<\/span>V <span class=\"pl-k\">-<\/span>All<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> You may also want DSIM enabled with all this, here&#39;s that detail.<span class=\"pl-c\"><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-disable-hyper-v-ps1-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-disable-hyper-v-ps1-LC13\" class=\"blob-code blob-code-inner js-file-line\">DISM <span class=\"pl-k\">/<\/span>Online <span class=\"pl-k\">/<\/span><span class=\"pl-c1\">Enable-Feature<\/span> <span class=\"pl-k\">/<\/span>All <span class=\"pl-k\">/<\/span>FeatureName:Microsoft<span class=\"pl-k\">-<\/span>Hyper<span class=\"pl-k\">-<\/span>V<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/Adron/85f9b7530c330d4e68d24cd062780c56/raw/910a0191e089f6305b6ab5ec3035c886f78f61cf/disable-hyper-v.ps1\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/Adron/85f9b7530c330d4e68d24cd062780c56#file-disable-hyper-v-ps1\">disable-hyper-v.ps1<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')