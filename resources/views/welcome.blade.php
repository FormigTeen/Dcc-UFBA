@extends('layout.master')
@section('external-home')
    @include('includes.cover.struct')

    @include('home.includes.quote')

    <div class="ui vertical stripe">
        <div class="ui equal width stackable internally grid">
            <div class="center aligned row">
                <div class="eight wide column">
                    <img src="{{ asset('/assets/logo/animation/startDCC.gif')}}" class="ui image big middle aligned">
                </div>
                <div class="left aligned eight wide column">
                    <h3>Sem accumsan lacus arcu.</h3>
                    <p>
                        Lorem ipsum dolor sit amet, urna maecenas aenean, integer felis turpis velit, taciti lorem aenean, non aliquam mattis suscipit. Id magna augue dolor, sed ut, a nec lectus nam eu, est sagittis massa velit fames, ac mollis risus velit. Leo lacinia pede malesuada nam amet nulla, lacus et sed porta vitae wisi eros. Leo architecto amet arcu in tempor aliquam, leo a semper, dui magna quam amet nec.
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')

    @include('includes.footer.footer')

@endsection
