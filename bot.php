<?php
function sendMessage($chatID, $message, $token) {
	$url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
	$url = $url . "&text=" . urlencode($message);
	$ch = curl_init();
	$optArray = array(
		CURLOPT_URL => $url,
		CURLOPT_RETURNTRANSFER => true
	);
	curl_setopt_array($ch, $optArray);
	$result = curl_exec($ch);
	curl_close($ch);
	return $result;
}

if (isset($_POST['id']) && isset($_POST['content'])) {
	$TOKEN = "<Bot token>";
	$CHAT_ID = "<Chat id>";
	$res = sendMessage($CHAT_ID, $_POST['content'] . "\n\n" . "id: " . $_POST['id'], $TOKEN);
	if ($res[0]) {
		echo "<p class='ok'>Message sent.</p>";
	} else {
		echo "<p class='error'>Try again later.</p>";
	}
}
