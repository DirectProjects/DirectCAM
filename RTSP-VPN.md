# DirectCAM → serwer RTSP → WinTAK przez VPN

Są dwa odcinki transportu. Ustawienie TCP w DirectCAM dotyczy telefonu → serwer. WinTAK również musi odbierać wideo przez TCP; samo połączenie sterujące RTSP przez TCP nie dowodzi, że wideo RTP jest przesyłane przez TCP.

## Konfiguracja do sprawdzenia na serwerze i odbiorniku

- W DirectCAM włącz RTSP TCP. Na próbę użyj H.264, 1280×720, 25 FPS, bitrate 1000–1800 kb/s i klatkę kluczową co 1 sekundę. Nie są to gwarantowane wartości dla każdego łącza.
- W WinTAK ustaw transport RTSP/RTP na TCP (reliable). Import XML z DirectCAM zawiera rtspReliable=1; sprawdź, czy używana wersja WinTAK respektuje ten parametr. Istniejący zapis odtwarzacza może zachować wcześniejsze ustawienia.
- Jeśli serwerem jest MediaMTX obsługujący te opcje, `rtspTransports: [tcp]` wymusza TCP także dla odbiorców. `udpMaxPayloadSize: 1200` ogranicza rozmiar datagramów, gdy UDP pozostaje potrzebne. Zmień tylko odpowiednie wpisy, zachowując istniejące hasła i ścieżki. Wymuszenie TCP dotyczy wszystkich klientów serwera; sprawdź jego wersję i zgodność pozostałych odbiorców.
- Sprawdź odbiór tego samego adresu w VLC z transportem TCP lub FFmpeg: `ffmpeg -rtsp_transport tcp -i rtsp://SERWER:8554/stream1 -t 30 -c copy odbior.mkv`. Jeśli uszkodzenia występują wyłącznie w WinTAK, porównaj ustawienia dekodera/transportu odtwarzaczy.

## Co zmienia 0.4.6

Pakiety RTP wysyłane przez DirectCAM mają maksymalnie 1200 bajtów, aby zostawić zapas na VPN. Nie wymusza to rozmiaru pakietów generowanych ponownie przez serwer. Dane kodera są kopiowane do niezależnej pamięci przed kolejkowaniem; po lokalnym przepełnieniu kolejki żądana jest klatka kluczowa. Poprzednia poprawka wielu NAL na klatkę pozostaje.

Z nagrania ekranu nie można określić, gdzie zginęły lub zostały uszkodzone dane. Wersja 0.4.6 usuwa wskazane problemy i ogranicza ryzyko fragmentacji; potwierdzenie efektu w konkretnej sieci VPN wymaga testu telefonu, serwera i WinTAK. Lokalny test TCP nie zastępuje takiego testu.

Dokumentacja serwera: https://mediamtx.org/docs/references/configuration-file
Transport RTSP: https://mediamtx.org/docs/usage/rtsp-specific-features
