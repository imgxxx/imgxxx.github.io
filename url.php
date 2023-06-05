<?php
$urls = array(
    'https://m.ipv4dns.com',
);
$api = 'http://data.zz.baidu.com/urls?site=https://m.ipv4dns.com&token=hrn89GgrkH1MnaCQ';
$ch = curl_init();
$options =  array(
    CURLOPT_URL => $api,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => implode("\n", $urls),
    CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
);
curl_setopt_array($ch, $options);
$result = curl_exec($ch);
echo $result;
?>