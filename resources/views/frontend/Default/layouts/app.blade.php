<!DOCTYPE html>
<html lang="en" class="notranslate" translate="no">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="Find the top online casino, voted best Canadian Casino Sites with bonus, voted number one in Ontario, Alberta, British-Columbia and Quebec.">
    <mete title="title" content="Best Online Casinos Canada 2021- Real Money Gambling" />
	<meta name="google" content="notranslate" />
	<meta name="author" content="JamesJ & Applewood" />
    <!-- <meta name="description" content="HTML template"> -->
    <meta name="viewport" content="width=device-width" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
	<meta name="keywords" content="Canada777+online+casino" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    
    <title>{{ settings('app_name') }}</title>
    
    @include('component.frontend.layout.style')
    @yield('page_top')
    
</head>
<body>
    @include('component.frontend.layout.header')
    <main>
    	@yield('slider')
        @include('component.frontend.layout.category')
        @yield('content')
        @include('component.frontend.layout.auth')
        @include('component.frontend.layout.deposit')
    </main>
    @include('component.frontend.layout.footer')
    @include('component.frontend.layout.script')
    @yield('page_bottom')
</body>
</html>